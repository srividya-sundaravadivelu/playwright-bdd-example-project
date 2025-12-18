@skip @bloodReportUploadModal
Feature: Blood Report Upload Modal Verification

  Background:
    Given User is on blood report modal

  Scenario: Verify upload box supports drag & drop
    When User hovers over the upload box
    Then Upload box should show drag & drop interaction

  Scenario Outline: Verify invalid blood report upload
    When User uploads "<fileType>" blood report
    Then User should see "<expectedResult>"

    Examples:
      | fileType  | expectedResult               |
      | non-PDF   | Only PDF files are supported |
      | over-10MB | File exceeds 10MB            |

  Scenario: Verify "Upload & Process" button is enabled after valid upload
    When User uploads valid PDF file
    Then User should see "processing percentage bar"
    And Upload & Process button should be enabled

  Scenario: Verify upload cancel button functionality
    When User clicks Cancel
    Then Modal should be closed and user returned to previous screen

  Scenario: Verify "Upload & Process" processes the file
    When User clicks Upload & Process after uploading valid file
    Then User should see Report analysis

  Scenario: Verify onboarding button in report analysis
    When User clicks Upload & Process after uploading valid file
    Then User should see onboarding button

  Scenario: Validate fields on report analysis
    When User clicks Upload & Process after uploading valid file
    Then User should see Blood Test Results,Complete Blood Count, Medical Conditions ,Abnormal Values, Recommendations
