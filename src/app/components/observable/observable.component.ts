import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription, Subject} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  observable$: Observable<any>;
  observableSubscription: Subscription;

  subject$: Subject<any>;
  subjectSubscription: Subscription;


  ngOnInit() {
    // observable - return subscription
    this.observable$ = new Observable((observer) => {
      observer.next('Observable ' + 1);
      observer.next('Observable ' + 2);
      observer.next('Observable ' + 3);
      observer.next('Observable ' + 'Google');
      observer.complete();
    });

    this.observableSubscription = this.observable$.subscribe(
      value => console.log(value),
      err => {
      },
      () => console.log('this is the end')
    );


    this.subject$ = new Subject();
    this.subjectSubscription = this.subject$.subscribe(x => console.log('Subject ', x));
    this.subject$.next(1);
    this.subject$.next(4);
    this.subject$.next('test');
  }

  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
    this.subjectSubscription.unsubscribe();
  }

}
