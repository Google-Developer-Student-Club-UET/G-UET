export type JobsHiringStepProps = {
  id: number
  icon: string
  name: string
  detail: string
  isDetailOn: boolean
}

export type JobsDetailProps = {
  position: string
  team: string
  jobDescription: string[]
  jobResponsibility: string[]
  jobRequirement: string[]
}

export type JobsDetailTextProps = {
  icon: string
  prefix: string
  text: string
  color: string
  details: string[]
}
