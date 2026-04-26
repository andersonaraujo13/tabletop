import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { Select } from 'primeng/select';
import { Book } from '../../../../class/dungeon-master/book.class';
import { BookService } from '../../../../service/dungeon-master/book.service';
import { Universe } from '../../../../class/dungeon-master/universe.class';

@Component({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    FloatLabel,
    DividerModule,
    Select,
    EditorModule,
  ],
  templateUrl: './universe-form-desktop.component.html',
  styleUrl: './universe-form-desktop.component.scss',
})
export default class UniverseFormDesktopComponent implements OnInit {
  private bookService = inject(BookService);
  private universe: Universe;
  formCadastro: FormGroup;
  formSubmitted = false;
  systems: Book[];
  selectedSystem: Book;

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.fb.group({
      name: [this.universe.name, Validators.required],
      description: ['', Validators.required],
      system: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.formCadastro.valid) {
      this.formCadastro.reset();
      this.formSubmitted = false;
    }
  }

  isInvalid(controlName: string) {
    const control = this.formCadastro.get(controlName);
    if(controlName == 'system'){
    //  console.log(control?.invalid, (control?.touched || this.formSubmitted), controlName);
    }

    return control?.invalid && this.formSubmitted;
  }

  ngOnInit() {
    this.bookService.findAllByDungeonMaster().subscribe(books =>{
      this.systems = books;
    });
  }

  salvar() {

  }
}
