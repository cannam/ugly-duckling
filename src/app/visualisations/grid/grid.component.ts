/**
 * Created by lucast on 31/05/2017.
 */
import {
  VerticallyBinned,
  VerticallyBinnedWavesComponent,
  VerticalBinNameRenderer,
  VerticalValueInspectorRenderer,
  WavesComponent
} from '../waves-base.component';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import Waves from 'waves-ui-piper';
import {AugmentedMatrixFeature} from '../FeatureUtilities';
import {iceMapper} from '../../spectrogram/ColourMap';
import {estimatePercentile} from '../../spectrogram/MatrixUtils';

@Component({
  selector: 'ugly-grid',
  templateUrl: '../waves-template.html',
  styleUrls: ['../waves-template.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: VerticallyBinned, useExisting: GridComponent },
    {provide: VerticalBinNameRenderer, useExisting: GridComponent },
    {provide: WavesComponent, useExisting: GridComponent}
  ]
})

export class GridComponent extends VerticallyBinnedWavesComponent<AugmentedMatrixFeature> {

  @Input() set grid(grid: AugmentedMatrixFeature) {
    this.feature = grid;
  }

  protected get featureLayers(): Layer[] {
    const startTime = this.feature.startTime;
    const stepDuration = this.feature.stepDuration;
    const matrixData = this.feature.data;

    if (matrixData.length === 0) {
      return [];
    }

    const targetValue = estimatePercentile(matrixData, 95);
    const gain = (targetValue > 0.0 ? (1.0 / targetValue) : 1.0);
    const matrixEntity = new Waves.utils.PrefilledMatrixEntity(
      matrixData,
      startTime,
      stepDuration
    );

    return [
      new Waves.helpers.MatrixLayer(
        matrixEntity,
        {
          gain: gain,
          height: this.height,
          normalise: 'none',
          mapper: iceMapper()
        }
      )
    ];
  }
    
  get binNames(): string[] {
    return this.feature.binNames;
  }
}
