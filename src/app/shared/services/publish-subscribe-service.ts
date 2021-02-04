import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { Subject } from 'rxjs';
 
@Injectable()
export class PubSubService {
    private subject = new Subject<any>();
    private inputtext = new Subject<any>();
    private assignmentID = new Subject<any>();
 
    publishMessage(message: string) {
        this.subject.next({ text: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    subscribeMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    publishInput(input: string) {
        this.inputtext.next({ text: input });
    }
 
    clearInput() {
        this.inputtext.next();
    }
 
    subscribeInput(): Observable<any> {
        return this.inputtext.asObservable();
    }

    publishAssignmentID(message: string) {
        this.assignmentID.next({ text: message });
    }
 
    clearAssignmentID() {
        this.assignmentID.next();
    }
 
    subscribeAssignmentID(): Observable<any> {
        return this.assignmentID.asObservable();
    }

}