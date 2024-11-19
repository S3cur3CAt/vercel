'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Battery,
  Bluetooth,
  Home,
  LightbulbIcon,
  Lock,
  MessageSquare,
  Mic,
  MoreHorizontal,
  Plus,
  Power,
  QrCode,
  Search,
  Settings,
  Share2,
  Thermometer,
  Timer,
  Trash2,
  Upload,
} from "lucide-react"

export function SmartHomeDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 rounded-lg shadow-sm mr-4">
        <div className="mb-8">
          <Button variant="ghost" className="w-full justify-start gap-2 text-primary">
            <Plus className="h-4 w-4" />
            NEW
          </Button>
        </div>
        <div className="mb-6">
          <h2 className="flex items-center justify-between text-xl font-semibold">
            Martine's Home
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 text-gray-500" />
            </Button>
          </h2>
          <div className="mt-2 flex items-center">
            <Avatar className="h-6 w-6 border-2 border-white">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6 -ml-2 border-2 border-white">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6 -ml-2 border-2 border-white">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="ml-2 text-xs">
              + Invite
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Lock className="h-4 w-4" />
            Security
            <span className="ml-auto rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">PRO+</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Thermometer className="h-4 w-4" />
            Temperature
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LightbulbIcon className="h-4 w-4" />
            Lighting
            <span className="ml-auto text-sm text-gray-500">60%</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <MessageSquare className="h-4 w-4" />
            Support
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-2">Device</h3>
          <div className="flex gap-2">
            <Avatar className="h-8 w-8 bg-gray-200">
              <AvatarImage src="/placeholder-device.jpg" />
              <AvatarFallback>D1</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 bg-gray-200">
              <AvatarImage src="/placeholder-device.jpg" />
              <AvatarFallback>D2</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 bg-gray-200">
              <AvatarImage src="/placeholder-device.jpg" />
              <AvatarFallback>D3</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 bg-gray-200">
              <AvatarImage src="/placeholder-device.jpg" />
              <AvatarFallback>D4</AvatarFallback>
            </Avatar>
            <Button size="icon" variant="outline" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Card className="mt-8">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">Speaker</span>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                </svg>
              </Button>
              <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-2">App Settings</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Color Theme</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                White
              </Button>
              <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                Dark
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">App color</span>
            <div className="flex gap-1">
              <div className="h-4 w-4 bg-blue-500 rounded-full" />
              <div className="h-4 w-4 bg-green-500 rounded-full" />
              <div className="h-4 w-4 bg-purple-500 rounded-full" />
              <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              EDIT
            </Button>
            <span className="text-sm text-gray-500">Updated 4 min ago</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mic className="h-4 w-4" />
            </Button>
            <Toggle aria-label="Toggle power" />
          </div>
        </div>

        <Tabs defaultValue="living-room" className="mb-6">
          <TabsList>
            <TabsTrigger value="living-room" className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full" />
              Living Room
            </TabsTrigger>
            <TabsTrigger value="kitchen">Kitchen Room</TabsTrigger>
            <TabsTrigger value="bedroom">Bed Room</TabsTrigger>
            <TabsTrigger value="movie">Movie Room</TabsTrigger>
            <TabsTrigger value="game">Game Room</TabsTrigger>
            <Button size="icon" variant="ghost">
              <Plus className="h-4 w-4" />
            </Button>
          </TabsList>
        </Tabs>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bluetooth className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Bluetooth</span>
                </div>
                <Toggle aria-label="Toggle bluetooth" />
              </div>
              <div className="rounded-lg border-2 border-dashed p-8 text-center">
                <span className="text-sm text-gray-500">Add device by Bluetooth</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Upload device</h3>
              <span className="text-sm text-gray-500">1/1</span>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">Uploading...</div>
                <Progress value={20} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>20% / 10 seconds left</span>
                  <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="Kalen" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Kalen</h3>
                <p className="text-xs text-gray-500">2 Devices</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[100px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-8 w-8 rounded-full bg-gray-200" />
                      <div>
                        <p className="text-sm font-medium">Kalen's mobile</p>
                        <p className="text-xs text-gray-500">IP Address: 192.432.467.113</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-8 w-8 rounded-full bg-gray-200" />
                      <div>
                        <p className="text-sm font-medium">Tablet2</p>
                        <p className="text-xs text-gray-500">IP Address: 123.353.364.111</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Smart Light</h3>
              <Toggle aria-label="Toggle smart light" />
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-center">
                <div className="mb-2 text-2xl font-bold">50%</div>
                <div className="text-xs text-gray-500">Brightness</div>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} className="mb-6" />
              <div className="flex justify-between">
                <div className="text-center">
                  <Button variant="ghost" size="sm" className="h-12 w-12 rounded-full">
                    <Power className="h-6 w-6" />
                  </Button>
                  <div className="mt-1 text-[10px]">Regular</div>
                </div>
                <div className="text-center">
                  <Button variant="ghost" size="sm" className="h-12 w-12 rounded-full">
                    <LightbulbIcon className="h-6 w-6" />
                  </Button>
                  <div className="mt-1 text-[10px]">Day</div>
                </div>
                <div className="text-center">
                  <Button variant="ghost" size="sm" className="h-12 w-12 rounded-full">
                    <Timer className="h-6 w-6" />
                  </Button>
                  <div className="mt-1 text-[10px]">Night</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Thermostat</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Auto Cooling</span>
                <Toggle aria-label="Toggle auto cooling" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold">24.3°</div>
                  </div>
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-blue-500"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                      strokeDasharray="283"
                      strokeDashoffset="200"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs">
                <span>18°</span>
                <span>30°</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm">
                  Swing
                </Button>
                <Button variant="outline" size="sm">
                  Auto
                </Button>
                <Button variant="outline" size="sm">
                  Timer
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Battery</h3>
              <span className="text-2xl font-bold">31%</span>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Battery className="h-12 w-12 text-gray-400" />
                <div className="space-y-2">
                  <Progress value={31} className="h-2 w-[200px]" />
                  <div className="text-xs text-gray-500">20 Hours</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}