export class OutputModel{
    constructor(
       public appName: string,
       public branchName: string,
       public prd03cBranch: string,
       public prd04cBranch: string,
       public healthCheck: string,
       public infoMsg: boolean,
       public url: string,

    ){}
}