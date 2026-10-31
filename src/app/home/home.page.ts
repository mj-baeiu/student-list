import { Component } from '@angular/core';
import {
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonList, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonBadge, 
  IonFooter, 
  IonAvatar,
  IonImg
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonList, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonBadge, 
    IonFooter, 
    IonAvatar, 
    IonImg
  ],
})
export class HomePage {
  title = 'BSIT Student Directory';
  showDetails = true;

  
  students = [
    {
      id: 1,
      name: 'Marlou Jefferson Mendoza',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
      age: 20,
      section: 'BSIT 3F',
      address: 'San Lorenzo, Gapan City',
      email: 'mjmendoza@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/marlou.jpg'
    },
    {
      id: 2,
      name: 'Cassy Poli',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
      age: 20,
      section: 'BSIT 3F',
      address: 'Polilio, Cabanatuan City',
      email: 'yssca@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/cassy.jpg'
    },
    {
      id: 3,
      name: 'Karl Andrei Francisco',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
      age: 22,
      section: 'BSIT 3F',
      address: 'Cabiao',
      email: 'karlaandrea@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/karl.jpg'
    },
    {
      id: 4,
      name: 'Bianca Grace Diaz',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
      age: 21,
      section: 'BSIT 3F',
      address: 'Tartaro, San Miguel',
      email: 'gracilicious@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/bianca.jpg'
    },
    {
      id: 5,
      name: 'Valeska Yves Beltran',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
      age: 21,
      section: 'BSIT 3F',
      address: 'Santa Rosa',
      email: 'akselavsevi@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/valeska.jpg'
    },
    {
      id: 6,
      name: 'Suseanne Reyes',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
      age: 21,
      section: 'BSIT 3F',
      address: 'Polilio, Cabanatuan City',
      email: 'chuchi@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/suseanne.jpg'
    },
    {
      id: 7,
      name: 'Kent Andrei Villa',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
      age: 20,
      section: 'BSIT 3F',
      address: 'Pantabangan',
      email: 'kentot@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/kent.jpg'
    }, {
      id: 8,
      name: 'Jin Vustin Nazareno',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
      age: 20,
      section: 'BSIT 3F',
      address: 'Dipaculao',
      email: 'vinvin@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/jin.jpg'
    }, {
      id: 9,
      name: 'Loraine De Jesus',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
      section: 'BSIT 3F',
      age: 22,
      address: 'Pula, Cabanatuan City',
      email: 'loleng@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/loleng.jpg'
    },
    {
      id: 10,
      name: 'John David Trinidad',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
      section: 'BSIT 3F',
      age: 21,
      address: 'Tramo, Santa Rosa',
      email: 'davejohn@gmail.com',
      status: 'Active',
      avatarImageSrc: '../../assets/students/david.jpg'
    }];


  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  selectedStudentId: number | null = null;

  toggleProfile(id: number) {
    if (this.selectedStudentId === id) {
      this.selectedStudentId = null;
    } else {
      this.selectedStudentId = id;
    }
  }
  
  constructor() {}
}
