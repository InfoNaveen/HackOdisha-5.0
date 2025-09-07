import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  BookOpen,
  Trophy,
  Target,
  CheckCircle,
  Play,
  Clock,
  Star,
} from "lucide-react";

const Learning = () => {
  const courses = [
    {
      title: "Phishing Email Recognition",
      description: "Learn to identify suspicious emails and protect yourself from email-based attacks.",
      progress: 75,
      duration: "45 min",
      difficulty: "Beginner",
      completed: false,
    },
    {
      title: "URL Safety Assessment",
      description: "Master the art of evaluating website URLs for potential security threats.",
      progress: 100,
      duration: "30 min",
      difficulty: "Beginner",
      completed: true,
    },
    {
      title: "Social Engineering Tactics",
      description: "Understand how attackers manipulate people and how to defend against these tactics.",
      progress: 40,
      duration: "60 min",
      difficulty: "Intermediate",
      completed: false,
    },
    {
      title: "Advanced Threat Detection",
      description: "Deep dive into sophisticated attack methods and detection techniques.",
      progress: 0,
      duration: "90 min",
      difficulty: "Advanced",
      completed: false,
    },
  ];

  const quizzes = [
    {
      title: "Email Security Quiz",
      questions: 15,
      bestScore: 87,
      attempts: 3,
      category: "Email Security",
    },
    {
      title: "URL Analysis Challenge",
      questions: 20,
      bestScore: 95,
      attempts: 2,
      category: "Web Security",
    },
    {
      title: "Social Engineering Scenarios",
      questions: 12,
      bestScore: 78,
      attempts: 4,
      category: "Human Psychology",
    },
  ];

  const achievements = [
    { title: "First Scan Complete", icon: "🎯", earned: true },
    { title: "Quiz Master", icon: "🧠", earned: true },
    { title: "Threat Hunter", icon: "🔍", earned: false },
    { title: "Security Expert", icon: "🛡️", earned: false },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-safe";
      case "Intermediate":
        return "text-warning";
      case "Advanced":
        return "text-danger";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <DashboardLayout currentPage="Learning Hub">
      <div className="space-y-6">
        {/* Learning Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                  <p className="text-3xl font-bold text-primary">1/4</p>
                  <p className="text-sm text-safe flex items-center mt-1">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    25% progress
                  </p>
                </div>
                <BookOpen className="w-12 h-12 text-primary/20" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Quiz High Score</p>
                  <p className="text-3xl font-bold text-accent">95%</p>
                  <p className="text-sm text-safe flex items-center mt-1">
                    <Star className="w-4 h-4 mr-1" />
                    Excellent
                  </p>
                </div>
                <Trophy className="w-12 h-12 text-accent/20" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-3xl font-bold text-warning">2/4</p>
                  <p className="text-sm text-safe flex items-center mt-1">
                    <Target className="w-4 h-4 mr-1" />
                    50% unlocked
                  </p>
                </div>
                <Trophy className="w-12 h-12 text-warning/20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              Cybersecurity Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="glass-card p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {course.description}
                      </p>
                    </div>
                    {course.completed && (
                      <CheckCircle className="w-6 h-6 text-safe flex-shrink-0 ml-2" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <Badge 
                          variant="outline" 
                          className={getDifficultyColor(course.difficulty)}
                        >
                          {course.difficulty}
                        </Badge>
                      </div>
                      <Button size="sm" variant={course.completed ? "outline" : "default"}>
                        {course.completed ? "Review" : "Continue"}
                        <Play className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Quizzes */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Interactive Quizzes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quizzes.map((quiz, index) => (
                    <div key={index} className="flex items-center justify-between p-4 glass-card rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{quiz.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{quiz.questions} questions</span>
                          <span>•</span>
                          <span>Best: {quiz.bestScore}%</span>
                          <span>•</span>
                          <span>{quiz.attempts} attempts</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline">{quiz.category}</Badge>
                        <Button size="sm">
                          Take Quiz
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 glass-card rounded-lg ${
                      achievement.earned ? "border-safe/50" : "opacity-50"
                    }`}
                  >
                    <div className="text-2xl mr-3">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{achievement.title}</div>
                      {achievement.earned && (
                        <div className="text-xs text-safe">Unlocked!</div>
                      )}
                    </div>
                    {achievement.earned && (
                      <CheckCircle className="w-5 h-5 text-safe" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Learning;