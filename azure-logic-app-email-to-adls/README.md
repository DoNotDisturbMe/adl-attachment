# Azure Logic App Email to ADLS

This project implements an Azure Logic App that triggers on receiving an email, downloads any attachments, and uploads them to Azure Data Lake Storage (ADLS).

## Project Structure

```
azure-logic-app-email-to-adls
├── workflows
│   └── email-trigger-workflow.json  # Logic App workflow definition
├── src
│   └── helpers
│       └── adlsUploader.ts          # Helper for uploading files to ADLS
├── .github
│   └── workflows
│       └── deploy.yml               # GitHub Actions workflow for deployment
├── package.json                      # NPM package configuration
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/azure-logic-app-email-to-adls.git
   cd azure-logic-app-email-to-adls
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Azure Logic App:**
   - Update the `email-trigger-workflow.json` file with your email trigger settings.
   - Ensure that the necessary permissions are granted for the Logic App to access your email and Azure Data Lake Storage.

4. **Deploy the Logic App:**
   - Use the GitHub Actions workflow defined in `.github/workflows/deploy.yml` to deploy the Logic App to Azure. 
   - Make sure to set up your GitHub repository secrets for Azure credentials.

## Usage

Once deployed, the Logic App will automatically trigger when an email is received. It will download any attachments and upload them to the specified Azure Data Lake Storage account.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.