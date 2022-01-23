import { Component } from '@townland-project/dom'
import { Event } from '../../core/event'

@Component({
    id: 'app-form-login',
    template: require('./component.html'),
})
export class FormLoginComponent {
    Submit() {
        Event.emit('enable-choose-character')
    }
}
