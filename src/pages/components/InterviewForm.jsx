import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import InterviewDescription from './InterviewDescription';
import ResumeUpload from './ResumeUpload';
import HorizontalCards from './HorizontalCards';

const InterviewForm = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">User Management</h1>
            </div>

            <Tabs defaultValue="form" className="w-full">
                <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                    <TabsTrigger value="form">Manual Entry</TabsTrigger>
                    <TabsTrigger value="upload">Upload Document</TabsTrigger>
                </TabsList>

                <TabsContent value="form">
                    <InterviewDescription />
                </TabsContent>

                <TabsContent value="upload">
                    <ResumeUpload />
                </TabsContent>
            </Tabs>

            <HorizontalCards />
        </div>
    );
};

export default InterviewForm;