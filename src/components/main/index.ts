import { Component, ComponentHelper, RenderComponent, RenderOnInit } from '@townland-project/dom'
import { FormComponent } from '../form'

@Component({
    id: 'app-main',
    template: require('./component.html'),
    style: require('./component.scss')
})
export class MainComponent extends ComponentHelper implements RenderOnInit {
    async RenderOnInit(): Promise<void> {
        this.Element.querySelector('main')?.appendChild(
            await RenderComponent(FormComponent),
        )
    }
}
