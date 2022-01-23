import { Component, ComponentHelper, RenderComponent, RenderOnInit } from '@townland-project/dom'
import { Event } from '../../core/event'
import { ChooseCharacterComponent } from '../choose-character'
import { FormComponent } from '../form'

@Component({
    id: 'app-main',
    template: require('./component.html'),
    style: require('./component.scss')
})
export class MainComponent extends ComponentHelper implements RenderOnInit {
    async RenderOnInit(): Promise<void> {
        Event.once('enable-choose-character', async () => {
            this.Element.querySelector('main')!.innerHTML = '';
            this.Element.querySelector('main')?.appendChild(
                await RenderComponent(ChooseCharacterComponent
                )
            );
        })

        this.Element.querySelector('main')?.appendChild(
            await RenderComponent(FormComponent),
        )
    }
}
