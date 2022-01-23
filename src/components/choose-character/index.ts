import { Component, ComponentHelper, RenderOnInit } from '@townland-project/dom'

@Component({
    id: 'app-choose-character',
    template: require('./component.html')
})
export class ChooseCharacterComponent extends ComponentHelper implements RenderOnInit {
    private Characters: string[] = [
        '/assets/man.png',
        '/assets/woman.png'
    ]

    public Index: number = 1
    public Length: number = this.Characters.length
    public Gender: 'Male' | 'Female' = 'Male'

    RenderOnInit(): void | Promise<void> {
        this._SetCharacter()
    }

    Next() {
        if (this.Index + 1 > this.Length) this.Index = 1
        else this.Index++
        //
        this.Gender = this.Index == 2 ? 'Female' : 'Male'
        //
        this.ValueChanged()
        this._SetCharacter()
    }

    Previus() {
        if (this.Index - 1 <= 0) this.Index = this.Length
        else this.Index--
        //
        this.Gender = this.Index == 2 ? 'Female' : 'Male'
        //
        this.ValueChanged()
        this._SetCharacter()
    }

    _SetCharacter() {
        let div = this.Element.querySelector('div.character') as HTMLDivElement

        div.style.backgroundImage = `url('${this.Characters[this.Index - 1]}')`
    }
}
