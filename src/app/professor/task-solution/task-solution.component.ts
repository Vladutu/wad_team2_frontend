import {Component, OnInit, ViewChild} from "@angular/core";

declare var jQuery:any;
@Component({
  selector: 'wad-professor-task-solution',
  templateUrl: './task-solution.component.html',
  styleUrls: ['./task-solution.component.css', '../../../assets/dist/themes/default/style.min.css']
})
export class TaskSolutionComponent implements OnInit {

  private content:string = '';
  private mode:string = 'java';
  ngOnInit() {

  }
  generateSolutionTree() {
    return {
      "text": "Homework1",
      "path": "/home/ids/wad/5/1/1/2",
      "extension": "",
      "file": false,
      "children": [
        {
          "text": "Writer.java",
          "path": "/home/ids/wad/5/1/1/2/Writer.java",
          "extension": "java",
          "file": true,
          "children": []
        },
        {
          "text": "Main.java",
          "path": "/home/ids/wad/5/1/1/2/Main.java",
          "extension": "java",
          "file": true,
          "children": []
        },
        {
          "text": "com",
          "path": "/home/ids/wad/5/1/1/2/com",
          "extension": "",
          "file": false,
          "children": [
            {
              "text": "wad",
              "path": "/home/ids/wad/5/1/1/2/com/wad",
              "extension": "",
              "file": false,
              "children": [
                {
                  "text": "test",
                  "path": "/home/ids/wad/5/1/1/2/com/wad/test",
                  "extension": "",
                  "file": false,
                  "children": [
                    {
                      "text": "Reader.java",
                      "path": "/home/ids/wad/5/1/1/2/com/wad/test/Reader.java",
                      "extension": "java",
                      "file": true,
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
  loadFileCode(event) {
    this.content = `
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/**
 * Created by ctotolin on 15-Nov-16.
 */
public class Reader {
    public Reader() {

    }
    public String readFile(String path) {
        try(BufferedReader br = new BufferedReader(new FileReader(path))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            while (line != null) {
                sb.append(line);
                sb.append(System.lineSeparator());
                line = br.readLine();
            }
            return sb.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "";
    }
}`;
  }
}
