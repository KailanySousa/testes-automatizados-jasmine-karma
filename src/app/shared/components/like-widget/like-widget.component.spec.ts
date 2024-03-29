import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(`${LikeWidgetComponent.name}`, () => {

    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
            //FIXME: angular não recomenda essa abordagem
            // providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;
    });

    it(`Should create component`, () => {
        expect(component).toBeTruthy();
    });

    
    it(`Should auto generate ID when id input property is missing`, () => {
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    });
    
    it(`Should not generate ID when id input property is present`, () => {
        const someId = 'someId';
        component.id = someId;
        fixture.detectChanges();
        expect(component.id).toBe(someId);
    });

    it(`${LikeWidgetComponent.prototype.like.name}
        should trigger emission when called`, () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like()
        expect(component.liked.emit).toHaveBeenCalled();
    });
})