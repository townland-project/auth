import { Component, ComponentHelper, RenderOnInit } from '@townland-project/dom'
import { Event } from '../../core/event'

@Component({
    id: 'app-form',
    template: require('./component.html'),
    style: require('./component.scss')
})
export class FormComponent extends ComponentHelper implements RenderOnInit {
    public tab: string = 'login'

    RenderOnInit(): void | Promise<void> {
        Event.on('form-footer-tab-change', (tab) => {
            (<HTMLDivElement>this.Element.querySelector(`app-form-${this.tab}`)).style.display = 'none'
            this.tab = tab;
            (<HTMLDivElement>this.Element.querySelector(`app-form-${this.tab}`)).style.display = 'block'
        })
    }
}
