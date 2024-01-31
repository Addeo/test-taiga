import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
    TuiAlertService,
    TuiButtonModule,
    TuiDataListModule,
    TuiDialogContext,
    TuiHintModule,
    TuiLoaderModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputCardModule} from '@taiga-ui/addon-commerce';
import {
    TuiAvatarModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import {TuiLetModule,} from '@taiga-ui/cdk';
import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-create-modal',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiInputCardModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiMultiSelectModule,
        TuiHintModule,
        TuiDataListModule,
        TuiSelectModule,
        TuiLoaderModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiAvatarModule,
    ],
    templateUrl: './create-modal.component.html',
    styleUrl: './create-modal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModalComponent {
    constructor(
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<string, string>,
    ) {}

    readonly createForm = new FormGroup({
        name: new FormControl('', {
            nonNullable: true,
        }),
        surname: new FormControl('', {
            nonNullable: true,
        }),
    });

    readonly search$ = new Subject<string | null>();


    onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }

    onFormCreateSubmit() {

    }

}
