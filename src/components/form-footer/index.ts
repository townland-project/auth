import { Component, ComponentHelper } from '@townland-project/dom'
import { Event } from '../../core/event'

@Component({
    id: 'app-form-footer',
    template: require('./component.html'),
    style: require('./component.scss')
})
export class FormFooterComponent extends ComponentHelper {
    private tab: string = 'login'

    change(tab: string): void {
        if (this.tab == tab) return
        this.clear()
        this.tab = tab
        this.focus()
        Event.emit('form-footer-tab-change', tab)
    }

    clear(): void {
        let div = this.Element.querySelector(`div.item.${this.tab}`) as HTMLDivElement

        div.style.top = '0px';
        div.style.backgroundColor = '#ffd3be'
    }

    focus(): void {
        let div = this.Element.querySelector(`div.item.${this.tab}`) as HTMLDivElement

        div.style.top = '-2px';
        div.style.backgroundColor = 'white'
    }
}