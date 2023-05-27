import { Observable } from "rxjs";

export function createHttpObservable(route: string): Observable<any>{
  const http$ = new Observable(observer => {
    fetch(route).then(res => {
      return res.json();
    }).then((body) => {
      observer.next(body);
      observer.complete();
    }).catch( error => {
      observer.error(error);
    })
  });

  return http$;
}

