import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestorauntResolverBase } from "./base/restoraunt.resolver.base";
import { Restoraunt } from "./base/Restoraunt";
import { RestorauntService } from "./restoraunt.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Restoraunt)
export class RestorauntResolver extends RestorauntResolverBase {
  constructor(
    protected readonly service: RestorauntService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
