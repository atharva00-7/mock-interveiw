import React,{useState} from 'react'
import { Upload } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
const ResumeUpload = () => {
    const [fileUploadMessage, setFileUploadMessage] = useState('');
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileUploadMessage(`File ${file.name} uploaded successfully!`);
            setTimeout(() => setFileUploadMessage(''), 3000);
        }
    };
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Upload User Document</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="border-2 border-dashed border-muted rounded-lg p-10 text-center">
                        <Upload className="mx-auto mb-4 text-muted-foreground" size={48} />
                        <p className="text-muted-foreground mb-4">Drag and drop your file here, or</p>
                        <Label className="cursor-pointer">
                            <Button variant="secondary" className="mb-2">
                                Browse Files
                            </Button>
                            <Input
                                type="file"
                                className="hidden"
                                accept=".pdf"
                                onChange={handleFileUpload}
                            />
                        </Label>
                        <p className="text-sm text-muted-foreground">
                            Supports: PDF, WORD (max 10MB)
                        </p>
                    </div>
                    {fileUploadMessage && (
                        <Alert className="mt-4">
                            <AlertDescription>{fileUploadMessage}</AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default ResumeUpload
