import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import { WaveformComponent } from './waveform/waveform.component';
import { AudioFileOpenComponent } from './audio-file-open/audio-file-open.component';
import { PlaybackControlComponent } from './playback-control/playback-control.component';

@NgModule({
  declarations: [
    AppComponent,
    WaveformComponent,
    AudioFileOpenComponent,
    PlaybackControlComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    {provide: 'piper-server-uri', useValue: 'ws://not/a/real/path'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
