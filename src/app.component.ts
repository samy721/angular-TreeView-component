import { Component, Inject } from '@angular/core';

/**
 * TreeView multi selection sample
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public localData: Object[] = [
    { id: 1, count: 0, name: 'Australia', hasChild: true, expanded: true },
    { id: 2, pid: 1, count: 0, name: 'New South Wales' },
    { id: 3, pid: 1, count: 0, name: 'Victoria', isSelected: true },
    { id: 4, pid: 1, count: 0, name: 'South Australia', isSelected: true },
    { id: 6, pid: 1, count: 0, name: 'Western Australia' },
    { id: 7, count: 0, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, count: 0, name: 'Paraná' },
    { id: 9, pid: 7, count: 0, name: 'Ceará' },
    { id: 10, pid: 7, count: 0, name: 'Acre' },
    { id: 11, count: 0, name: 'China', hasChild: true },
    { id: 12, pid: 11, count: 0, name: 'Guangzhou' },
    { id: 13, pid: 11, count: 0, name: 'Shanghai' },
    { id: 14, pid: 11, count: 0, name: 'Beijing' },
    { id: 15, pid: 11, count: 0, name: 'Shantou' },
    { id: 16, count: 0, name: 'France', hasChild: true },
    { id: 17, pid: 16, count: 0, name: 'Pays de la Loire' },
    { id: 18, pid: 16, count: 0, name: 'Aquitaine' },
    { id: 19, pid: 16, count: 0, name: 'Brittany' },
    { id: 20, pid: 16, count: 0, name: 'Lorraine' },
    { id: 21, count: 0, name: 'India', hasChild: true },
    { id: 22, pid: 21, count: 0, name: 'Assam' },
    { id: 23, pid: 21, count: 0, name: 'Bihar' },
    { id: 24, pid: 21, count: 0, name: 'Tamil Nadu' },
    { id: 25, pid: 21, count: 0, name: 'Punjab' },
  ];
  public field: Object = {
    dataSource: this.localData,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
    selected: 'isSelected',
  };
  // Enable multi tree node selection
  public allowMultiSelection: boolean = true;
  public allowEditing: boolean = true;
  //Bind the nodeChecked event
  public editing(args) {
    //check whether node is root node or not
    if (args.node.parentNode.parentNode.nodeName !== 'LI') {
      args.cancel = true;
    }
  }
  public changeCount(event, item) {
    if (event.target.value.trim()) item.count = +event.target.value;
    else {
      item.count = 0;
    }
  }
  public triggerCount(event, item) {
    event.stopPropagation();
    item.count = null;
    setTimeout(() => {
      document.getElementById('field' + item.id).focus();
    });
  }
}
