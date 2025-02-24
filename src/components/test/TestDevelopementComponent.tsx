'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Briefcase, Code2, User, FolderKanban } from 'lucide-react'
import { STYLES } from '../../config/style'

const applicationObj = {
  name: 'Environment Selector',
  environments: [
    {
      name: 'Production',
      icon: 'Briefcase',
      resourceTypes: [
        {
          resource_id: 1,
          name: 'infrastructure',
          description: 'Risorse infrastrutturali',
        },
        {
          resource_id: 2,
          name: 'framework',
          description: 'Framework e librerie',
        },
        { resource_id: 3, name: 'platform', description: 'Piattaforme' },
        { resource_id: 4, name: 'database', description: 'Database' },
        { resource_id: 5, name: 'hosting', description: 'Servizi Hosting' },
        { resource_id: 6, name: 'platform', description: 'Applicazione' },
      ],
      functionsTypes: [
        { function_id: 1, name: 'service', description: 'Servizi web' },
        { function_id: 2, name: 'tool', description: 'Strumenti' },
        {
          function_id: 3,
          name: 'api',
          description: 'Interfacce di programmazione',
        },
        {
          function_id: 4,
          name: 'provider',
          description: 'Fornitori di servizi',
        },
      ],
    },
    {
      name: 'Development',
      icon: 'Code2',
      resourceTypes: [
        {
          resource_id: 1,
          name: 'infrastructure',
          description: 'Risorse infrastrutturali',
        },
        {
          resource_id: 2,
          name: 'framework',
          description: 'Framework e librerie',
        },
        { resource_id: 3, name: 'platform', description: 'Piattaforme' },
        { resource_id: 4, name: 'database', description: 'Database' },
        { resource_id: 5, name: 'hosting', description: 'Servizi Hosting' },
        { resource_id: 6, name: 'platform', description: 'Applicazione' },
      ],
      functionsTypes: [
        { function_id: 1, name: 'service', description: 'Servizi web' },
        { function_id: 2, name: 'tool', description: 'Strumenti' },
        {
          function_id: 3,
          name: 'api',
          description: 'Interfacce di programmazione',
        },
        {
          function_id: 4,
          name: 'provider',
          description: 'Fornitori di servizi',
        },
      ],
    },
    {
      name: 'Personal',
      icon: 'User',
      resourceTypes: [
        { resource_id: 7, name: 'favorite', description: 'Favoriti' },
        { resource_id: 8, name: 'todo', description: 'Todo' },
        { resource_id: 9, name: 'readlater', description: 'Read Later' },
        { resource_id: 10, name: 'generic', description: 'Generic' },
      ],
    },
    {
      name: 'Portfolio',
      icon: 'FolderKanban',
      resourceTypes: [],
    },
  ],
}

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase,
  Code2,
  User,
  FolderKanban,
}

export default function EnvironmentSelector() {
  const handleItemClick = (type: string, item: any) => {
    console.log(`Clicked ${type}:`, item)
  }

  return (
    <div className={STYLES.CONTAINER}>
      <h1 className={STYLES.TITLE}>{applicationObj.name}</h1>
      <Tabs defaultValue={applicationObj.environments[0].name.toLowerCase()}>
        <TabsList className={STYLES.TABS_LIST}>
          {applicationObj.environments.map((env) => {
            const IconComponent = iconMap[env.icon]
            return (
              <TabsTrigger
                key={env.name}
                value={env.name.toLowerCase()}
                className={STYLES.TAB_TRIGGER}
              >
                <IconComponent className={STYLES.ICON} />
                {env.name}
              </TabsTrigger>
            )
          })}
        </TabsList>
        {applicationObj.environments.map((env) => (
          <TabsContent key={env.name} value={env.name.toLowerCase()}>
            <div className={STYLES.CONTENT_GRID}>
              <Card>
                <CardHeader>
                  <CardTitle>Resource Types</CardTitle>
                  <CardDescription>
                    Available resource types for {env.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={STYLES.LIST}>
                    {env.resourceTypes.map((resource) => (
                      <li
                        key={resource.resource_id}
                        className={STYLES.LIST_ITEM}
                        onClick={() => handleItemClick('resource', resource)}
                      >
                        <span className={STYLES.LIST_ITEM_TITLE}>
                          {resource.name}
                        </span>
                        : {resource.description}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {env.functionsTypes && (
                <Card>
                  <CardHeader>
                    <CardTitle>Function Types</CardTitle>
                    <CardDescription>
                      Available function types for {env.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className={STYLES.LIST}>
                      {env.functionsTypes.map((func) => (
                        <li
                          key={func.function_id}
                          className={STYLES.LIST_ITEM}
                          onClick={() => handleItemClick('function', func)}
                        >
                          <span className={STYLES.LIST_ITEM_TITLE}>
                            {func.name}
                          </span>
                          : {func.description}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
