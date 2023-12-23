import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestorauntService } from "./restoraunt.service";
import { RestorauntControllerBase } from "./base/restoraunt.controller.base";

@swagger.ApiTags("restoraunts")
@common.Controller("restoraunts")
export class RestorauntController extends RestorauntControllerBase {
  constructor(
    protected readonly service: RestorauntService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
