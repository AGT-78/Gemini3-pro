import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { Zap, Users, TrendingUp, ArrowRight, Bot, Workflow, Clock } from 'lucide-react'

const ValuePropositions = () => {
  const values = [
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: 'Lead Automation',
      description: 'Transform Your Lead Management',
      features: [
        'Instant lead capture from multiple sources',
        'Intelligent lead scoring and routing',
        'Automated follow-up sequences',
        'Real-time notifications and alerts',
      ],
      stats: { value: '3x', label: 'Faster Response Time' },
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Client Onboarding',
      description: 'Seamless Client Experience',
      features: [
        'Automated document collection',
        'Digital signature workflows',
        'Welcome sequence automation',
        'CRM integration and sync',
      ],
      stats: { value: '80%', label: 'Time Saved' },
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: 'Operational Efficiency',
      description: 'Scale Your Business Operations',
      features: [
        'Workflow automation across tools',
        'Data synchronization and reporting',
        'Task scheduling and reminders',
        'Custom integrations with n8n',
      ],
      stats: { value: '10hrs', label: 'Saved Per Week' },
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Solutions
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Automation That Actually <span className="text-primary">Works</span>
          </h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We specialize in three core areas that deliver immediate impact to your service business
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{value.title}</CardTitle>
                <CardDescription className="text-base">{value.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <ul className="space-y-3">
                  {value.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-primary">{value.stats.value}</span>
                    <span className="text-sm text-white/70">{value.stats.label}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300">
            <Bot className="w-10 h-10 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-Powered</h4>
              <p className="text-sm text-white/70">
                Leverage cutting-edge AI to make your automations smarter and more adaptive
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300">
            <Workflow className="w-10 h-10 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Custom Built</h4>
              <p className="text-sm text-white/70">
                Every automation is tailored specifically to your business processes and needs
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300">
            <Clock className="w-10 h-10 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
              <p className="text-sm text-white/70">
                Round-the-clock monitoring and support to ensure your automations run smoothly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuePropositions

