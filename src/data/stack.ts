export interface StackItem {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'database'
}

export const stack: StackItem[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
]