import { loadEnvConfig } from '@next/env'
 
export default async function env(){
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}