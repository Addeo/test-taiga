import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Injector,
    Input,
    OnInit,
    Output,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDialogContext,
    TuiDialogService,
    TuiHostedDropdownModule,
    TuiSizeL,
    TuiSizeS,
    TuiSvgModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {TuiDataListWrapperModule, TuiInputModule, TuiInputMonthRangeModule, TuiMultiSelectModule} from '@taiga-ui/kit';
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";

@Component({
    selector: 'app-edit-form',
    standalone: true,
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiActiveZoneModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputMonthRangeModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiMultiSelectModule,
        TuiSvgModule,
    ],
    templateUrl: './edit-form.component.html',
    styleUrl: './edit-form.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFormComponent implements OnInit{
    @Output() changeEvent = new EventEmitter<string>();

    size: TuiSizeL | TuiSizeS = 's';
    dropdownOpen = false;

    @ViewChild('modalDelete')
    public modalDelete!: TemplateRef<any>;

    readonly redactForm = new FormGroup({
        name: new FormControl('', {
            nonNullable: true,
        }),
        surname: new FormControl('', {
            nonNullable: true,
        }),
    });

    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit() {
            this.redactForm.patchValue({
                name: 'Test Name',
                surname: 'Test Surname'
            })
    }

    redact(content: PolymorpheusContent<TuiDialogContext>) {
        this.dialogs.open(content).subscribe();
    }

    delete(content: PolymorpheusContent<TuiDialogContext>) {
        this.dialogs.open(content).subscribe();
    }

    onFormRedactSubmit(observer: any) {

    }

    allowDelete(observer: any) {

    }

    cancelDelete(observer: any) {
        observer.complete()
        this.changeDetectorRef.markForCheck()
    }
}
