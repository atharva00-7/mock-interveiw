import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { chatSession } from '../../../Utils/GeminiAI';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const ManualForm = () => {
    const [formData, setFormData] = useState({
        interviewType: '',
        techStack: '',
        difficulty: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInterviewTypeChange = (value) => {
        setFormData(prev => ({
            ...prev,
            interviewType: value
        }));
    };

    const handleTechStackChange = (e) => {
        setFormData(prev => ({
            ...prev,
            techStack: e.target.value
        }));
    };

    const handleDifficultyChange = (value) => {
        setFormData(prev => ({
            ...prev,
            difficulty: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const prompt = `Generate 5 interview questions for a ${formData.interviewType} interview, focusing on ${formData.techStack}, with a difficulty level of ${formData.difficulty}. 
Provide the output in the following JSON format:
{
  "questions": [
    {
      "question": "Question text here"
    },
    ...
  ]
}
Do not include any text before or after the JSON.`
            const questionList = await chatSession.sendMessage(prompt);
            console.log(questionList)
            const questionInJson = questionList.response.text().replace("```json", "").replace("```", "");
            const parsedQuestions = JSON.parse(questionInJson);
            console.log("Parsed questions:", parsedQuestions);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            interviewType: '',
            techStack: '',
            difficulty: ''
        });
    };

    return (
        <Card className="w-full mx-auto">
            <div className="px-4">

                <CardHeader className="px-0">
                    <CardTitle>Create an Interview</CardTitle>
                    <CardDescription>
                        Start your new mock interview in one-click.
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1.5">
                            <Label htmlFor="interviewType">Type of Interview</Label>
                            <Select
                                value={formData.interviewType}
                                onValueChange={handleInterviewTypeChange}
                            >
                                <SelectTrigger id="interviewType">
                                    <SelectValue placeholder="Select interview type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="hr">HR Interview</SelectItem>
                                    <SelectItem value="technical">Technical Interview</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="techStack">Tech Stack</Label>
                            <Textarea
                                id="techStack"
                                value={formData.techStack}
                                onChange={handleTechStackChange}
                                placeholder="Enter job description or required technologies (e.g., ReactJS, Node.js, Lua...)"
                                className="min-h-[100px]"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="difficulty">Difficulty Level</Label>
                            <Select
                                value={formData.difficulty}
                                onValueChange={handleDifficultyChange}
                            >
                                <SelectTrigger id="difficulty">
                                    <SelectValue placeholder="Select difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="easy">Easy</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="hard">Hard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-end gap-4 px-0">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancel}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        {isLoading ? 'Deploying...' : 'Deploy'}
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
};

export default ManualForm;