import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding:1rem">
      <h2>Unauthorized</h2>
      <p>The authentication callback failed. Inspect details below.</p>
      <div style="background:#f8d7da;color:#842029;padding:1rem;border-radius:6px;margin-bottom:1rem">
        <strong>URL</strong>
        <div style="word-break:break-all">{{ href }}</div>
      </div>
      <div>
        <strong>Query / Hash Params</strong>
        <pre style="background:#f1f1f1;padding:1rem;border-radius:6px">{{ params }}</pre>
      </div>
      <p>If you see an <code>error</code> param, paste it here or check your Identity Provider logs.</p>
    </section>
  `,
})
export class UnauthorizedComponent {
  href = '';
  params = '';

  constructor(route: ActivatedRoute) {
    try {
      this.href = window.location.href;
    } catch {}

    try {
      const qp: Record<string,string> = {};
      route.queryParamMap.subscribe((m) => {
        m.keys.forEach((k) => (qp[k] = m.get(k) ?? ''));
        this.params = JSON.stringify(qp, null, 2);
      });
      // also capture hash (implicit flows)
      if (window && window.location && window.location.hash) {
        const hash = window.location.hash.replace(/^#/, '');
        const pairs = new URLSearchParams(hash);
        if (pairs.toString()) {
          const hp: Record<string,string> = {};
          pairs.forEach((v,k)=> hp[k]=v);
          const existing = this.params ? JSON.parse(this.params) : {};
          this.params = JSON.stringify(Object.assign({}, existing, hp), null, 2);
        }
      }
    } catch (e) {
      this.params = `failed to read params: ${String(e)}`;
    }
  }
}
