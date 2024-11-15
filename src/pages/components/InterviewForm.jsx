import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
function InterviewForm() {
    return (
        <div className={`min-h-screen w-full flex items-center justify-center p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/027/231/616/non_2x/illustration-graphic-of-aesthetic-colorful-background-template-with-minimalist-pastel-colors-and-abstract-fluid-shapes-simple-and-minimalist-background-template-vector.jpg')] bg-cover`}>

            <div>

                <Card className="w-[600px] py-5">
                    <h1 className="text-center text-black font-black text-4xl">Prometheus</h1>
                    <CardHeader>
                        <CardTitle>Create an Interview</CardTitle>
                        <CardDescription>Start your new mock interview in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Type of Interview</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="HR Interview">Human Resource Interview</SelectItem>
                                        <SelectItem value="Technical Interview">Technical Interview</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid w-full items-center gap-4 my-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Text Stack (Give Job Description)</Label>
                                    <Input id="name" placeholder="ReactJS, Angular, Java, etc." />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Difficulty of Interview</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="Easy">Easy</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="Hard">Hard</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default InterviewForm;