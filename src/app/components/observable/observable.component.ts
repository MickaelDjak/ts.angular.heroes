import {Component, OnInit} from '@angular/core';
import {Observable, Subscription, Subject, BehaviorSubject, ReplaySubject, interval, of, from, fromEvent, range, timer} from 'rxjs';
import {filter, map, scan, take} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  ngOnInit() {
    console.log('Example 1');
    const people = [
      {name: 'Vladilen', age: 25},
      {name: 'Elena', age: 17},
      {name: 'Ivan', age: 18},
      {name: 'Igor', age: 14},
      {name: 'Lisa', age: 32},
      {name: 'Irina', age: 23},
      {name: 'Oleg', age: 20}
    ];

    const sub = interval(1000)
      .pipe(
        take(people.length),
        filter(i => people[i].age >= 18),
        map(i => people[i].name),
        scan((acc, name) => acc.concat(name), []),
      )
      .subscribe(el => console.log(el));

    setTimeout(() => sub.unsubscribe(), 2500);
    timer(3000).subscribe((e) => sub.unsubscribe());

    console.log('Example 2');

    const subjectOf$ = of(1, 2, 3, 4, 5, 6);

    subjectOf$.subscribe(el => console.log('of ' + el));


    console.log('Example 3');

    const subjectFrom$ = from([1, 2, 3, 4, 5, 6]).pipe(
      map(el => 2 * el),
      scan((acc, el) => acc.concat(el), [])
    );

    subjectFrom$.subscribe(el => console.log('from ' + el));


    console.log('Example `Observable`');

    const subjectObservable$ = new Observable(
      (observer) => {
        observer.next(2);
        observer.next(20);
        observer.next(200);
        setTimeout(() => observer.next(1000), 1000);
        setTimeout(() => observer.error('Something went wrong'), 2000);
        setTimeout(() => observer.next(3000), 3000);
        // observer.complete("done");
      }
    );


    subjectObservable$.subscribe(
      el => console.log('Observable 1 ' + el),
      el => console.log('Observable 1 error', el),
      el => console.log('Observable 1 complete', el)
    );


    subjectObservable$.subscribe({
      next(el): void {
        console.log('Observable 2 ' + el);
      },
      error(el): void {
        console.log('Observable 2 ' + el);
      },
      complete(el): void {
        console.log('Observable 2 ' + el);
      }
    });


    console.log('Example `fromEvent`');
    const canvasArea = document.querySelector('canvas');
    const clearButton = document.getElementById('clear');

    fromEvent(canvasArea, 'mousemove')
      .pipe(
        map(el => ({
          x: el.offsetX,
          y: el.offsetY,
          ctx: el.target.getContext('2d'),
        }))
      )
      .subscribe(event => {
        event.ctx.fillRect(event.x, event.y, 2, 2);
      });

    const clear$ = fromEvent(clearButton, 'click');
    clear$.subscribe(() => {
      canvasArea.getContext('2d').clearRect(0, 0, canvasArea.width, canvasArea.height);
    });

    console.log('Example `Subject`');
    document.addEventListener('click', (e) => {
      const strim$ = new Subject();
      // const strim$ = new BehaviorSubject('first');
      // const strim$ = new ReplaySubject(3);
      // strim$.subscribe(v => console.log('listen1.Subject ', v));
      strim$.next(1);
      strim$.next(e);
      strim$.next('test 0');
      strim$.next('test 1');
      strim$.next('test 2');
      const one = strim$.subscribe(v => console.log('listen2.Subject ', v));
      one.unsubscribe();
    });
  }

}
