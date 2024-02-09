import { IsNotEmpty, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty()  
    @Length(5,240)
    content: string;

    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    recipientId: string;
}