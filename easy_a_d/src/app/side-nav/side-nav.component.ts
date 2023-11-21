import { Component } from '@angular/core';
// services
import { StartupService } from '../services/startup.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
role: string = 'Admin'
admin_is_collapsed: boolean = true
reporting_is_collapsed: boolean = true
tool_move_schedule_is_collapsed: boolean = true
help_is_collapsed: boolean = true
user_help_file_is_collapsed: boolean = true
admin_help_file_is_collapsed: boolean = true
developer_help_file_is_collapsed: boolean = true
constructor(
  public startupService: StartupService
){

}

ngOnInit(): void {

}
applyView(component: string) {

}
goToExternalLink(something: string) {

}
openImpersonateModal() {

}
removeImpersonation() {

}
}

