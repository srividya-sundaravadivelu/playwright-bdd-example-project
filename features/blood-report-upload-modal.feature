@bloodReportUploadModal
Feature: Blood Report Upload Modal Verification

  Background:
    Given User is on blood report modal

  Scenario: Verify upload box supports drag & drop
    When User hovers over the upload box
    Then Upload box should show drag & drop interaction

  Scenario Outline: Verify invalid blood report upload
    When User clicks Upload & Process after uploading file "<filePath>"
    Then User should see "<expectedResult>"

    Examples:
      | filePath               | expectedResult               |
      | data/files/invalid.txt | Only PDF files are supported |
      | data/files/large.pdf   | File exceeds 10MB            |

  Scenario: Verify "Upload & Process" button is enabled after valid upload
    When User uploads valid PDF file "data/files/valid-blood-report.pdf"
    Then Upload & Process button should be enabled

  Scenario: Verify upload cancel button functionality
    When User clicks Cancel
    Then Modal should be closed and user returned to previous screen

  Scenario: Verify "Upload & Process" processes the file
    When User clicks Upload & Process after uploading file "data/files/valid-blood-report.pdf"
    Then User should see Report analysis

  Scenario: Verify onboarding button in report analysis
    When User clicks Upload & Process after uploading file "data/files/valid-blood-report.pdf"
    Then User should see onboarding button

  Scenario: Validate fields on report analysis
    When User clicks Upload & Process after uploading file "data/files/valid-blood-report.pdf"
    Then User should see Blood Test Results,Complete Blood Count, Medical Conditions ,Abnormal Values, Recommendations
