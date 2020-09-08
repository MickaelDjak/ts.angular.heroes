import {Component, Input, OnInit} from '@angular/core';
import {ErrorReportInterface} from '../../../../shered/types/errorReport.interface';

@Component({
  selector: 'con-validation-viewer',
  templateUrl: './validation-viewer.component.html'
})
export class ValidationViewerComponent implements OnInit {

  @Input() validationReport: ErrorReportInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

  get messages(): Array<string> {
    const messageList = [];
    if (this.validationReport) {
      Object.keys(this.validationReport).forEach((name) => {
        this.validationReport[name].map((el) => {
          messageList.push(`${name} ` + el);
        });
      }, []);
    }

    return messageList;
  }

}
