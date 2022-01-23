import { Module } from '@townland-project/dom'
import { FormFooterComponent } from './form-footer';
import { FormForgetComponent } from './form-forget';
import { FormLoginComponent } from './form-login';
import { FormRegisterComponent } from './form-register';
import { MainComponent } from './main';

@Module({
    Component: [
        FormFooterComponent,
        FormForgetComponent,
        FormLoginComponent,
        FormRegisterComponent
    ],
    Bootstrap: MainComponent
})
export class AuthModule { }