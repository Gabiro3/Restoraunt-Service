import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestorauntModuleBase } from "./base/restoraunt.module.base";
import { RestorauntService } from "./restoraunt.service";
import { RestorauntController } from "./restoraunt.controller";
import { RestorauntResolver } from "./restoraunt.resolver";

@Module({
  imports: [RestorauntModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestorauntController],
  providers: [RestorauntService, RestorauntResolver],
  exports: [RestorauntService],
})
export class RestorauntModule {}
