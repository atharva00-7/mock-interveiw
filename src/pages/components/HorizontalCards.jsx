import React,{useState} from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { User } from 'lucide-react';
x
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
  import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';  
const HorizontalCards = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', department: 'Engineering', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', department: 'Design', status: 'active' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', department: 'Product', status: 'inactive' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const departments = ['Engineering', 'Design', 'Product', 'Marketing', 'Sales'];
    const roles = ['Developer', 'Designer', 'Manager', 'Director', 'Analyst'];
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map(user => (
                    <Card key={user.id} className="relative group">
                        <CardContent className="pt-6">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="text-red-600"
                                            onClick={() => removeUser(user.id)}
                                        >
                                            Delete User
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-secondary p-3 rounded-full">
                                    <User className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold leading-none">{user.name}</h3>
                                    <p className="text-sm text-muted-foreground">{user.email}</p>
                                </div>
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="flex gap-2">
                                    <Badge variant="outline">{user.role}</Badge>
                                    <Badge variant="outline">{user.department}</Badge>
                                </div>
                                <Badge variant={user.status === 'active' ? 'success' : 'secondary'}>
                                    {user.status}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default HorizontalCards
