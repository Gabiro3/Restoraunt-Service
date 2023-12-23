import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestorauntServiceBase } from "./base/restoraunt.service.base";

@Injectable()
export class RestorauntService extends RestorauntServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
