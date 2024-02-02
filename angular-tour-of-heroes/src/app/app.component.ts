import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule, TuiDialogService } from '@taiga-ui/core';
import {EditFormComponent} from "./edit-form/edit-form.component";
import {CreateModalComponent} from "./create-modal/create-modal.component";

import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiTableModule} from "@taiga-ui/addon-table";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
        TuiRootModule, // Has to go after BrowserAnimationsModule
        RouterOutlet,
        TuiDialogModule,
        TuiAlertModule,
        EditFormComponent,
        TuiButtonModule,
        TuiTableModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(
      @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
      @Inject(Injector) private readonly injector: Injector,
  ) {
  }

    private readonly dialog = this.dialogs.open<number>(
        new PolymorpheusComponent(CreateModalComponent, this.injector),
    );

    readonly columns = ['actions'];
    createOpenModal() {
        this.dialog.subscribe({
            next: (data) => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {

            },
        });
    }
}
