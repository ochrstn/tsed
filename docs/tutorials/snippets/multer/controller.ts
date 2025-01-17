import {Controller} from "@tsed/di";
import {MulterOptions, MultipartFile, PlatformMulterFile} from "@tsed/platform-http";
import {Post} from "@tsed/schema";

@Controller("/")
class MyCtrl {
  @Post("/file")
  private uploadFile1(@MultipartFile("file") file: PlatformMulterFile) {}

  @Post("/file")
  @MulterOptions({dest: "/other-dir"})
  private uploadFile2(@MultipartFile("file") file: PlatformMulterFile) {}
}
