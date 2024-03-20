import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe(`${LikeWidgetComponent.name}`, () => {

    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LikeWidgetComponent
            ],
            providers: [
                UniqueIdService
            ],
            imports: [
                FontAwesomeModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
    });

    it(`Should create component`, () => {
        const instance = fixture.componentInstance;
        expect(instance).toBeTruthy();
    })
})