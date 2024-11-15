import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare, Clock, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';
const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted">
            <div>
                <Navbar />
            </div>

            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-foreground mb-6">
                            Master Your Interview Skills with AI
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Practice interviews with our advanced AI interviewer. Get real-time feedback,
                            improve your confidence, and land your dream job.
                        </p>
                        <div className="flex justify-center gap-4">
                            <NavLink to="/interviewForm">
                                <Button size="lg">
                                    Start Practice Interview
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </NavLink>
                            <Button size="lg" variant="outline">
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Our Platform?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="p-6">
                            <Brain className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">AI-Powered Interviews</h3>
                            <p className="text-muted-foreground">
                                Advanced AI technology that adapts to your responses and provides
                                realistic interview scenarios.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <MessageSquare className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Real-time Feedback</h3>
                            <p className="text-muted-foreground">
                                Get instant feedback on your answers, body language, and areas for
                                improvement.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <Clock className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Practice Anytime</h3>
                            <p className="text-muted-foreground">
                                24/7 access to practice interviews at your convenience, from anywhere
                                in the world.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="bg-primary text-primary-foreground py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">50,000+</div>
                            <div className="text-primary-foreground/80">Practice Interviews</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">95%</div>
                            <div className="text-primary-foreground/80">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">200+</div>
                            <div className="text-primary-foreground/80">Interview Templates</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Ace Your Next Interview?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join thousands of successful candidates who have improved their interview
                    skills with our platform.
                </p>
                <Button size="lg">
                    Get Started Free
                    <Sparkles className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>
    );
};

export default HomePage;