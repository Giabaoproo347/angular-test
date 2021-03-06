import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Activity} from '../../../interface/activity';
import {ActivityService} from '../../../services/activity/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activity: Activity[] = [];

  constructor(private activityService: ActivityService, private router: Router) {
  }

  ngOnInit() {
    this.activityService.getList().subscribe(result => {
      this.activity = result;
      console.log('success');
    }, error => {
      console.log('error');
    });
  }

  submitDeleteActivity(id: number) {
    if (confirm('Bạn thực sự muốn xóa') === true) {
      this.deleteActi(id);
    }
  }

  deleteActi(id: number) {
    this.activityService.deleteActivity(id).subscribe(result => {
      this.ngOnInit();
      console.log('success');
    }, error => {
      console.log('error');
    });
  }

  goToEdit(item: Activity) {
    this.activityService.setData(item);
    this.router.navigateByUrl('/edit-activity');
  }

}
