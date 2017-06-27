Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Text.RegularExpressions
Imports System.Web
Imports System.Web.Security
Imports TimberSmart.Data
Imports TimberSmart.Security

Namespace Rules
    
    Partial Public Class UsersBusinessRules
        Inherits TimberSmart.Rules.SharedBusinessRules

        ''' <summary>
        ''' This method will execute in any view before an action
        ''' with a command name that matches "Insert|Update".
        ''' </summary>
        <Rule("r100")>
        Public Sub r100Implementation(
                    ByVal userID As Nullable(Of Integer),
                    ByVal userName As String,
                    ByVal password As FieldValue,
                    ByVal email As String,
                    ByVal comment As String,
                    ByVal passwordQuestion As String,
                    ByVal passwordAnswer As String,
                    ByVal isApproved As Nullable(Of Boolean),
                    ByVal lastActivityDate As Nullable(Of DateTime),
                    ByVal lastLoginDate As Nullable(Of DateTime),
                    ByVal lastPasswordChangedDate As Nullable(Of DateTime),
                    ByVal creationDate As Nullable(Of DateTime),
                    ByVal isLockedOut As Nullable(Of Boolean),
                    ByVal lastLockedOutDate As Nullable(Of DateTime),
                    ByVal failedPasswordAttemptCount As Nullable(Of Integer),
                    ByVal failedPasswordAttemptWindowStart As Nullable(Of DateTime),
                    ByVal failedPasswordAnswerAttemptCount As Nullable(Of Integer),
                    ByVal failedPasswordAnswerAttemptWindowStart As Nullable(Of DateTime),
                    ByVal customerID As Nullable(Of Integer))
            'This is the placeholder for method implementation.

            If Not password Is Nothing And password.Modified Then
                ApplicationMembershipProvider.ValidateUserPassword(userName, password.NewValue)
                password.NewValue = ApplicationMembershipProvider.EncodeUserPassword(password.NewValue)
            End If

        End Sub
    End Class
End Namespace
