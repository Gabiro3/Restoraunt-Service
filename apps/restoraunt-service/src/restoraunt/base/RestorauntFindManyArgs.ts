/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RestorauntWhereInput } from "./RestorauntWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RestorauntOrderByInput } from "./RestorauntOrderByInput";

@ArgsType()
class RestorauntFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RestorauntWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RestorauntWhereInput, { nullable: true })
  @Type(() => RestorauntWhereInput)
  where?: RestorauntWhereInput;

  @ApiProperty({
    required: false,
    type: [RestorauntOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RestorauntOrderByInput], { nullable: true })
  @Type(() => RestorauntOrderByInput)
  orderBy?: Array<RestorauntOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RestorauntFindManyArgs as RestorauntFindManyArgs };