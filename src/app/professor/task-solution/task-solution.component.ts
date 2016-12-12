import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SolutionService} from "../../service/solution.service";
import {FolderNode, FilePath, Content} from "../../model/models";

declare var jQuery: any;
@Component({
  selector: 'wad-professor-task-solution',
  templateUrl: './task-solution.component.html',
  styleUrls: ['./task-solution.component.css', '../../../assets/dist/themes/default/style.min.css']
})
export class TaskSolutionComponent implements OnInit {

  private content: string = '';

  private mode: string = 'java';

  private solutionId: number;

  private folderNode: FolderNode;

  private extensionMap: any = {
    'java': 'java',
    'cs': 'csharp',
    'c': 'c_cpp',
    'cpp': 'c_cpp',
    'xml': 'xml',
    'json': 'json'
  };

  constructor(private activatedRoute: ActivatedRoute, private solutionService: SolutionService) {
    this.solutionId = this.activatedRoute.snapshot.params['solutionId'];
  }

  ngOnInit() {
    this.solutionService.getFolderStructure(this.solutionId)
      .subscribe((folderNode: FolderNode) => {
        this.folderNode = folderNode;
      }, error => {
        console.log(error);
      })
  }

  generateSolutionTree() {
    return this.folderNode;
  }

  loadFileCode(event) {
    this.mode = this.extensionMap[event.extension];
    let filePath: FilePath = new FilePath(event.path);
    this.solutionService.getFileContent(filePath)
      .subscribe((content: Content) => {
        this.content = content.content;
      }, error => {
        console.log(error);
      });
  }
}
