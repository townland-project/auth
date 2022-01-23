import "./style/tailwind.scss"
import { RenderModule } from "@townland-project/dom"
import { AuthModule } from "."

RenderModule(AuthModule).then(element => document.getElementById('root')?.appendChild(element!))